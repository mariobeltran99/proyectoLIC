((d) => {
  const formCode = sessionStorage.getItem('formCode');
  const bodyContent = d.querySelector('div[content]');
  if (!!formCode) {
    bodyContent.innerHTML = formCode;
  } else {
    bodyContent.innerHTML = '<code>Nothing to do here.</code>';
  }
})(document);