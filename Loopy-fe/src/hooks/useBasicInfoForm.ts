import { useEffect, useRef, useState } from "react";
import { useSetting } from "../contexts/AdminSettingProvider";
import { useOwnerCafeBasic } from "./query/admin/setting/useOwnerCafeBasic";
import { loadDraft, saveDraft, clearDraft } from "../utils/draftStorage";
import { usePostOwnerCafeBasicInfo } from "./mutation/admin/basic/usePostOwnerCafeBasicInfo";
import type { PostOwnerCafeBasicInfoRequest } from "../apis/admin/setting/basic/type";

const STORAGE_KEY = "loopy:admin:basicInfo:draft";
const DRAFT_TTL_MS = 7 * 24 * 60 * 60 * 1000;

export function useBasicInfoForm() {
  const { context, update } = useSetting();
  const initial = context.basicInfo;

  const [form, setForm] = useState(initial);
  const [hydrated, setHydrated] = useState(false);
  const [dirty, setDirty] = useState(false);

  const latestFormRef = useRef(form);
  const dirtyRef = useRef(dirty);
  useEffect(() => { latestFormRef.current = form; }, [form]);
  useEffect(() => { dirtyRef.current = dirty; }, [dirty]);

  useEffect(() => {
    const restored = loadDraft<typeof form>(STORAGE_KEY, DRAFT_TTL_MS);
    if (restored) {
      setForm(restored);
      setHydrated(true);
    }
  }, []);

  const { data, isLoading } = useOwnerCafeBasic();
  useEffect(() => {
    if (!data || hydrated) return;
    const digitsPhone = (data.phone || "").replace(/\D/g, "");
    setForm((prev) => ({
      ...prev,
      storeName: data.name ?? "",
      ownerName: data.ownerName ?? "",
      address: data.address ?? "",
      phone: digitsPhone,
      description: data.description ?? "",
      sns: data.websiteUrl ?? "",
    }));
    setHydrated(true);
  }, [data, hydrated]);

  const setField =
    <K extends keyof typeof form>(key: K) =>
    (v: typeof form[K]) => {
      setForm((prev) => ({ ...prev, [key]: v }));
      setDirty(true);
    };

  const { mutateAsync: postBasicInfo, isPending: isSubmitting } = usePostOwnerCafeBasicInfo();

  const commit = async () => {
    const next = latestFormRef.current;

    const fullAddress =
      next.detailAddress && next.detailAddress.trim().length > 0
        ? `${next.address} ${next.detailAddress}`
        : next.address;

    const phoneDigits = (next.phone || "").replace(/\D/g, "");

    const payload: PostOwnerCafeBasicInfoRequest = {
      name: next.storeName,
      ownerName: next.ownerName,
      address: fullAddress,
      region1DepthName: (next as any).region1DepthName, 
      region2DepthName: (next as any).region2DepthName,
      region3DepthName: (next as any).region3DepthName,
      latitude: (next as any).latitude,
      longitude: (next as any).longitude,
      phone: phoneDigits,
      websiteUrl: next.sns || "",
      description: next.description,
    };

    await postBasicInfo(payload); 
    update(next);         
    saveDraft(STORAGE_KEY, next);

    setDirty(false);
  };

  useEffect(() => {
    if (!dirty) return;
    const t = setTimeout(() => {
      saveDraft(STORAGE_KEY, latestFormRef.current);
      setDirty(false);
    }, 500);
    return () => clearTimeout(t);
  }, [form, dirty]);

  useEffect(() => {
    const flush = () => saveDraft(STORAGE_KEY, latestFormRef.current);
    const onVisibility = () => { if (document.hidden) flush(); };
    window.addEventListener("beforeunload", flush);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("beforeunload", flush);
      document.removeEventListener("visibilitychange", onVisibility);
      flush();
    };
  }, []);

  const maxPhotos = 5;
  const minPhotos = 3;
  const isValid =
    !!form.storeName?.trim() &&
    !!form.ownerName?.trim() &&
    !!form.address?.trim() &&
    !!form.detailAddress?.trim() &&
    (form.phone || "").replace(/\D/g, "").length === 11 &&
    (form.photos?.length ?? 0) >= minPhotos &&
    !!form.description?.trim();

  const clearDraftAfterServerSave = () => clearDraft(STORAGE_KEY);

  return {
    form, setField, commit, isValid,
    isLoading: isLoading && !hydrated,
    isSubmitting,
    maxPhotos, minPhotos,
    clearDraftAfterServerSave,
  };
};
