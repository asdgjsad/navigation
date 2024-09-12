import {type toolsModel} from './tyeps'

const tools:toolsModel = {
  observer: null
}

// 观察元素是否进入视口
if(import.meta.client){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 元素已进入视口
        console.log('Element is in the viewport');
      } else {
        // 元素不在视口内
        console.log('Element is not in the viewport');
      }
    });
  }, {
    threshold: 0.5 // 当元素至少有50%进入视口时触发回调
  });

  tools.observer = observer
}

export default tools