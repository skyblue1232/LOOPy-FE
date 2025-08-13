type StatusMessageProps = {
  status: 'idle' | 'loading' | 'success' | 'notfound' | 'error';
};

const StatusMessage = ({ status }: StatusMessageProps) => {
  if (status === 'loading') {
    console.log('고객 정보를 불러오는 중...');
  }
  if (status === 'notfound') {
    console.log(
      '해당 번호의 고객 정보가 없습니다. 번호를 확인하거나 새로 입력해주세요.',
    );
  }
  if (status === 'error') {
    console.log('조회 중 오류가 발생했습니다. 다시 시도해주세요.');
  }
  if (status === 'idle') {
    console.log('대기 상태입니다.');
  }
  if (status === 'success') {
    console.log('고객 정보를 성공적으로 불러왔습니다.');
  }

  return null;
};

export default StatusMessage;
