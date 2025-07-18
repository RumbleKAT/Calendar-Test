(function(root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.validateEventData = factory();
  }
}(this, function() {
  return function validateEventData(eventData) {
    if (!eventData.title) {
      return { valid: false, message: '제목은 필수입니다!' };
    }
    if (!eventData.start || !eventData.end) {
      return { valid: false, message: '시작과 종료 날짜가 필요합니다!' };
    }
    return { valid: true };
  };
}));
