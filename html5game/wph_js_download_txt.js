function download_txt(name,str)
{
  // 텍스트 파일의 내용과 파일 이름을 받아와서 Blob 객체 생성
  const blob = new Blob([str], { type: 'text/plain' });

  // Blob 객체를 URL.createObjectURL을 사용하여 다운로드할 수 있는 URL로 변환
  const url = window.URL.createObjectURL(blob);

  // <a> 엘리먼트를 생성하고 다운로드 링크 설정
  const a = document.createElement('a');
  a.href = url;
  a.download = name;

  // 다운로드 링크를 클릭하여 파일 다운로드 실행
  a.click();

  // URL.createObjectURL로 생성한 URL 해제
  window.URL.revokeObjectURL(url);
}