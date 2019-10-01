import { isYes } from '../src/is-yes.js';
const test = QUnit.test;

// Yes cases
test('should return true if the user says yes', function(assert) {
    const userAnswer = 'yes';
    const userAnswerIsCorrect = isYes(userAnswer);
    assert.equal(userAnswerIsCorrect, true);
});

test('should return true if the user says Yes', function(assert) {
    const userAnswer = 'Yes';
    const userAnswerIsCorrect = isYes(userAnswer);
    assert.equal(userAnswerIsCorrect, true);
});

test('should return true if the user says y', function(assert) {
    const userAnswer = 'y';
    const userAnswerIsCorrect = isYes(userAnswer);
    assert.equal(userAnswerIsCorrect, true);
});

test('should return true if the user says Ys', function(assert) {
    const userAnswer = 'Y';
    const userAnswerIsCorrect = isYes(userAnswer);
    assert.equal(userAnswerIsCorrect, true);
});

//No cases
test('should return false if the user says no', function(assert) {
    const userAnswer = 'no';
    const userAnswerIsCorrect = isYes(userAnswer);
    assert.equal(userAnswerIsCorrect, false);
});

test('should return false if the user says No', function(assert) {
    const userAnswer = 'No';
    const userAnswerIsCorrect = isYes(userAnswer);
    assert.equal(userAnswerIsCorrect, false);
});

test('should return false if the user says n', function(assert) {
    const userAnswer = 'n';
    const userAnswerIsCorrect = isYes(userAnswer);
    assert.equal(userAnswerIsCorrect, false);
});

test('should return false if the user says N', function(assert) {
    const userAnswer = 'N';
    const userAnswerIsCorrect = isYes(userAnswer);
    assert.equal(userAnswerIsCorrect, false);
});
