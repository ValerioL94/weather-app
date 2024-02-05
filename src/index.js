import './styles.css';
import weather from './modules/weather';
import dom from './modules/dom';

function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context('/src/images', false, /\.(png|svg|jpg|jpeg|gif)$/));

weather.initPage();
dom.setBg();
