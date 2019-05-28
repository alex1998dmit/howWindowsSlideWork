const renderObj = new Render(12, 3);

renderObj.renderAll();
const winSize = renderObj.winSize;

renderSlidingWindowReceiver(0, winSize);

async function animateSegments(i = 0) {
  $(`#point-${i}`).hide();
  renderObj.renderSendSegment(i);
  await animateSegmentMoving(i, winSize);
  return ;
}

for (let i = 0; i < winSize; i++) {
  setTimeout(animateSegments, 500 + i * 200, i, winSize); 
  // setTimeout(animateSegments, 1000, i+1);
}