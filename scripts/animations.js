const animateAckMoving = (i, winSize, animationSpeed) => {
  $(`#ack-${i}`).css('backgroundColor', 'green');
  $(`#field-${i}`).text(`ACK`);
  $(`#field-${i}`).animate({
    paddingTop: "+=400px",
  }, 1000, () => animateSegments(i+winSize));
  if (i % winSize === 0) {
    resetSlidingWindowReceiver();
    renderSlidingWindowReceiver(i, i + winSize);
  }
  $(`#ack-${i}`).text(`${i}`);
}

const animateSegmentMoving = (i, winSize, animationSpeed) => {
  $(`#field-${i}`).append(`SEG`);
  $(`#field-${i}`).animate({
    paddingTop: "0px"
  }, 1000, () => animateAckMoving(i, winSize, animationSpeed));
  if (i % winSize === 0) {
    resetSlidingWindowSender();
    renderSlidingWindowSender(i, i + winSize);
  }
}