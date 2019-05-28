const renderSlidingWindowSender = (start, end) => {
  for (let i = start; i < end; i++ ) {
    $(`#segment-${i}`).css('border', '4px solid blue');
  }
}

const resetSlidingWindowSender = () => {
  $(`.sender-block`).css("border", "1px solid black");
}

const renderSlidingWindowReceiver = (start, end) => {
  for (let i = start; i < end; i++ ) {
    $(`#ack-${i}`).css('border', '4px solid blue');
  }
}

const resetSlidingWindowReceiver = () => {
  $(`.ack-block`).css("border", "1px solid black");
}