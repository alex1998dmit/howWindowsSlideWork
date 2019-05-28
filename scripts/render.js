class Render {
  constructor(numOfSegments, winSize) {
    this.num = numOfSegments;
    this.winSize = winSize;
    this.blockWidth = 12/Math.ceil(this.num);
  }

  renderReceiverSide() {

    $('#receiver-side').append(`<div class="row" id="receiver-win"></div>`);
    let receiverBlock = $('#receiver-side .row');
    
    for (let i = 0; i < this.num; i++) {
      receiverBlock.append(
        `
          <div class="col-md-${this.blockWidth} ack-block" id="ack-${i}"></div>
        `
      );
    }
  }

  renderField() {
    $('#field').append(`<div class="row" id="field-win"></div>`);
    let fieldBlock = $('#field .row');

    for (let i = 0; i < this.num; i++) {
      fieldBlock.append(
        `
          <div class="col-md-${this.blockWidth} field-block" id="field-${i}"></div>
        `
      );
    }
  }

  renderSenderSide() {
    $('#sender-side').append(`<div class="row" id="sender-win"></div>`);
    let senderBlock = $('#sender-side .row');

    for (let i = 0; i < this.num; i++) {
      senderBlock.append(
        `
          <div class="col-md-${this.blockWidth} sender-block" id="segment-${i}">${i}</div>
        `
      );
    }
  }

  renderSlidingWindowAtSender() {
    $(`#sender-win`).append(`
      <div class="slide-window" id="window-sender"></div>
    `)
  }

  renderFirstSendingSegments() {
    for (let i = 0; i < this.winSize; i++) {
      $(`#field-${i}`).append(`
        <div class="point" id="point-${i}"></div>
      `);
    }
  }

  renderSendSegment(i) {
    $(`#field-${i}`).append(`
        <div class="point" id="point-${i}"></div>
    `);
  }

  renderButtons() {
    $(``).append(`<button class="start-button">Start</button>`);
  }

  renderAll() {
    this.renderReceiverSide();
    this.renderField();
    this.renderSenderSide();
    this.renderSlidingWindowAtSender();
    this.renderFirstSendingSegments();
  }
}