document.addEventListener('DOMContentLoaded', function () {
  const languageDivs = document.querySelectorAll('div[class^="language-"]');


  // Ϊÿ������Ƭ����Ӹ���ͼ��
  languageDivs.forEach(languageDiv => {
    const codeActionBar = document.createElement('div');
    codeActionBar.classList.add('code-action-bar', 'flex', 'justify-between');

    codeActionBar.innerHTML = `<span></span><span class="copy-icon">&#128203;</span>`;
    languageDiv.parentNode.insertBefore(codeActionBar, languageDiv);

    const copyIcon = codeActionBar.querySelector('.copy-icon');
    // �������ͼ��ʱ���ƴ���Ƭ�ε�������
    copyIcon.addEventListener('click', () => {
      // ���ƴ���Ƭ�ε����ݵ�������
      // get pre tag element innertext from codeSnippet
      const textToCopy = languageDiv.querySelector('pre').innerText;
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          // ���Ƴɹ���ͼ�����Ϊ�Ժ�
          copyIcon.innerHTML = '&#10003;';

          // 2���ָ�ͼ��Ϊԭʼ״̬
          setTimeout(() => {
            copyIcon.innerHTML = '&#128203;';
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });

    });
  });

});