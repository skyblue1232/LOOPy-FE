import { useState } from 'react';
import TimeInput from './TimeInput';
import SelectableItem from './SelectableItem';

interface OperatingTimeSectionProps {
    openTime: string;
    closeTime: string;
    setOpenTime: (time: string) => void;
    setCloseTime: (time: string) => void;
    breakStart: string;
    breakEnd: string;
    setBreakStart: (time: string) => void;
    setBreakEnd: (time: string) => void;
    breakEnabled: boolean;
    setBreakEnabled: (enabled: boolean) => void;

    weekendOpenTime: string;
    weekendCloseTime: string;
    setWeekendOpenTime: (time: string) => void;
    setWeekendCloseTime: (time: string) => void;
    weekendBreakStart: string;
    weekendBreakEnd: string;
    setWeekendBreakStart: (time: string) => void;
    setWeekendBreakEnd: (time: string) => void;
    weekendBreakEnabled: boolean;
    setWeekendBreakEnabled: (enabled: boolean) => void;
}

export default function OperatingTimeSection({
    openTime,
    closeTime,
    setOpenTime,
    setCloseTime,
    breakEnabled,
    setBreakEnabled,
    breakStart,
    breakEnd,
    setBreakStart,
    setBreakEnd,
    weekendOpenTime,
    weekendCloseTime,
    setWeekendOpenTime,
    setWeekendCloseTime,
    weekendBreakEnabled,
    setWeekendBreakEnabled,
    weekendBreakStart,
    weekendBreakEnd,
    setWeekendBreakStart,
    setWeekendBreakEnd,
}: OperatingTimeSectionProps) {
    const [selectedType, setSelectedType] = useState<'same' | 'weekend' | 'custom'>('same');

      const renderTimeSet = (
        title: string,
        open: string,
        close: string,
        setOpen: (val: string) => void,
        setClose: (val: string) => void,
        breakOn: boolean,
        setBreakOn: (val: boolean) => void,
        breakS: string,
        breakE: string,
        setBreakS: (val: string) => void,
        setBreakE: (val: string) => void
    ) => (
        <div className="bg-[#F5F5F5] p-[1.5rem] rounded-[0.75rem] flex flex-col gap-[1.5rem]">
            {title && <span className="text-[1rem] font-semibold text-[#7F7F7F]">{title}</span>}
            <div className="flex flex-col gap-[1rem]">
                <TimeSectionLabel label="영업시간" />
                <TimeRangeInput start={open} end={close} setStart={setOpen} setEnd={setClose} />
            </div>
            <BreakTimeSection
                breakEnabled={breakOn}
                setBreakEnabled={setBreakOn}
                breakStart={breakS}
                breakEnd={breakE}
                setBreakStart={setBreakS}
                setBreakEnd={setBreakE}
            />
        </div>
    );

    return (
        <>
            <div className="flex gap-[1rem] mb-[1rem]">
                <SelectableItem label="모든 영업일이 같아요" selected={selectedType === 'same'} onClick={() => setSelectedType('same')} />
                <SelectableItem label="평일/주말 달라요" selected={selectedType === 'weekend'} onClick={() => setSelectedType('weekend')} />
                <SelectableItem label="요일별로 달라요" selected={selectedType === 'custom'} onClick={() => setSelectedType('custom')} />
            </div>

            {selectedType === 'same' &&
                renderTimeSet('',
                openTime, closeTime, setOpenTime, setCloseTime,
                breakEnabled, setBreakEnabled, breakStart, breakEnd, setBreakStart, setBreakEnd)}

            {selectedType === 'weekend' && (
                <div className="flex flex-col gap-[0.5rem]">
                    {renderTimeSet('평일',
                        openTime, closeTime, setOpenTime, setCloseTime,
                        breakEnabled, setBreakEnabled, breakStart, breakEnd, setBreakStart, setBreakEnd
                    )}
                    {renderTimeSet('주말',
                        weekendOpenTime, weekendCloseTime,
                        setWeekendOpenTime, setWeekendCloseTime,
                        weekendBreakEnabled, setWeekendBreakEnabled,
                        weekendBreakStart, weekendBreakEnd,
                        setWeekendBreakStart, setWeekendBreakEnd
                    )}
                </div>
            )}

            {selectedType === 'custom' && (
                <div className="text-[0.875rem] text-[#A8A8A8]">요일별 설정은 추후 지원 예정입니다.</div>
            )}
        </>
    );
}

const TimeSectionLabel = ({ label }: { label: string }) => (
    <div className="text-[1rem] font-semibold leading-[100%]">{label}</div>
);

// 시간 범위 입력
const TimeRangeInput = ({
    start,
    end,
    setStart,
    setEnd,
}: {
    start: string;
    end: string;
    setStart: (val: string) => void;
    setEnd: (val: string) => void;
}) => (
    <div className="flex items-center gap-[0.75rem]">
        <TimeInput value={start} onChange={setStart} />
        <span className="text-[1rem]">~</span>
        <TimeInput value={end} onChange={setEnd} />
    </div>
);

// 브레이크 타임
const BreakTimeSection = ({
    breakEnabled,
    setBreakEnabled,
    breakStart,
    breakEnd,
    setBreakStart,
    setBreakEnd,
}: {
    breakEnabled: boolean;
    setBreakEnabled: (enabled: boolean) => void;
    breakStart: string;
    breakEnd: string;
    setBreakStart: (val: string) => void;
    setBreakEnd: (val: string) => void;
}) => (
    <div>
        <TimeSectionLabel label="브레이크 타임" />
        <div className="flex items-center gap-[1.5rem] mt-[0.75rem] mb-[0.75rem]">
            <button
                onClick={() => setBreakEnabled(true)}
                className="flex items-center gap-[0.5rem] text-[1rem] font-normal leading-[100%]"
            >
                <SelectableItem label='있음' selected={breakEnabled} onClick={() => breakEnabled} />
            </button>
            <button
                onClick={() => setBreakEnabled(false)}
                className="flex items-center gap-[0.5rem] text-[1rem] font-normal leading-[100%]"
            >
                <SelectableItem label='없음' selected={!breakEnabled} onClick={() => !breakEnabled} />
            </button>
        </div>
        {breakEnabled && (
            <TimeRangeInput
                start={breakStart}
                end={breakEnd}
                setStart={setBreakStart}
                setEnd={setBreakEnd}
            />
        )}
    </div>
);
