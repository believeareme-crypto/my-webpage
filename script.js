// 获取所有文字层
const allTextLayers = Array.from(document.querySelectorAll('.text-layer'));

// 直接显示文字
allTextLayers.forEach(layer => {
  layer.innerHTML = layer.dataset.text.replace(/\n/g, '<br>');
  layer.style.opacity = 1;
});

// 如果图片也有隐藏或透明度动画，可以同样直接显示
const allImages = Array.from(document.querySelectorAll('img'));
allImages.forEach(img => {
  img.style.opacity = 1;
  img.style.transform = "none"; // 如果之前有缩放或平移动画，直接清掉
});

// 获取所有需要横向缩放的元素
const scaleElements = Array.from(document.querySelectorAll('.scale-x-animation'));

// 判断元素是否在视口中
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

// 滚动触发动画
function handleScrollScale() {
  scaleElements.forEach(el => {
    // 只触发一次
    if (!el.classList.contains('scale-x-animate') && isInViewport(el)) {
      el.classList.add('scale-x-animate');
    }
  });
}

// 页面加载和滚动时检查
window.addEventListener('load', handleScrollScale);
window.addEventListener('scroll', handleScrollScale);