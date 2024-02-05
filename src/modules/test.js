function test() {
  const pageBg = document.getElementById('content');
  const btn = document.getElementById('bg');
  const weather = ['sunny', 'cloudy', 'rainy', 'snowy', 'windy', 'foggy'];
  let i = 1;
  btn.addEventListener('click', () => {
    if (i === weather.length) i = 0;
    pageBg.className = `${weather[i]}`;
    i++;
  });
}

export default test;
