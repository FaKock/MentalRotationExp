// In this file you can specify the trial data for your experiment


const trial_info = {
    key_press_task: [],
    key_press_practice: [],
};

var images_main = [];
for(i=1; i<=12; i++) {
  images_main.push({name: ''+i+'_50_same.jpg', expected: 'same', key: 'b', rotation: '50'});
  images_main.push({name: ''+i+'_50_different.jpg', expected: 'different', key: 'n', rotation: '50'});
  images_main.push({name: ''+i+'_150_same.jpg', expected: 'same', key: 'b', rotation: '150'});
  images_main.push({name: ''+i+'_150_different.jpg', expected: 'different', key: 'n', rotation: '150'});
};

var images_test = [];
for(i = 13; i<=15; i++) {
    images_test.push({name: ''+i+'_50_same.jpg', expected: 'same', key: 'b', rotation: '50'});
    images_test.push({name: ''+i+'_50_different.jpg', expected: 'different', key: 'n', rotation: '50'});
    images_test.push({name: ''+i+'_150_same.jpg', expected: 'same', key: 'b', rotation: '150'});
    images_test.push({name: ''+i+'_150_different.jpg', expected: 'different', key: 'n', rotation: '150'});
};
// add the images to the trials
for(i = 0; i < 12; i++) {
  trial_info.key_press_practice.push({
      question: "Are the two figures the same?",
      picture: 'images/'+images_test[i].name,
      key1: 'b',
      key2: 'n',
      b: 'same',
      n: 'different',
      picture_number: i+1,
      rotation: images_test[i].rotation,
      expected: images_test[i].expected,
  });
};

for(i = 0; i < 48; i++) {
  trial_info.key_press_task.push({
      question: "Are the two figures the same?",
      picture: 'images/'+images_main[i].name,
      key1: 'b',
      key2: 'n',
      b: 'same',
      n: 'different',
      picture_number: i+1,
      rotationdegree: images_main[i].rotation,
      expected: images_main[i].expected,
  });
};
