import './styles.css';
import test from './modules/test';
import weather from './modules/weather';

function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context('/src/images', false, /\.(png|svg|jpg|jpeg|gif)$/));

test();
weather.initPage();
