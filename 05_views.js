// In this file you can instantiate your views
// First instantiate your wrapping views, then you can instantiate your trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

* More about the properties and functions of the wrapping views - https://github.com/babe-project/babe-project/blob/master/docs/views.md#wrapping-views-properties

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = babeViews.view_generator('intro', {
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `Welcome,
            <br />
            <br />
            this is an experiment regarding mental rotation.
            <br />
            <br />
            The experiment is split into a practice phase and a main test phase.
            The practice phase will introduce you to the task so you may perform more securely in the main test phase.
            We thank you for participating in our experiment.
            <br />
            <br />
            If you coninue you will see the instructions.`,
   buttonText: 'Continue'
});

// For most tasks, you need instructions views
const instructions = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instrucions',
    title: 'General Instructions',
    text:  `In the following you will be shown pictures like the example picture below.
            Your goal is to fast and accurately describe if the depicted forms are different or the same.
            If the forms are the same please press the key 'b'. If the forms are different please press the key 'n'
            Please use your dominant hand to press the keys during the experiment.
            <br />
            <br />
            In the trial phase you will be randomly shown 12 pictures to judge.
            After each picture you will be provided a key press feedback as to whether the response was “correct” or
            “incorrect”.
            <br />
            <br />
            During the main test phase you will be shown 48 random pictures to judge.
            There will be no key press feedback.
            <br />
            <br />
            If you have no questions please continue on.`,
    picture:"images/sample.jpg",
    buttonText: 'Continue'
});

//In the begin screen the participant can collect its sorts before starting the experiment
const begin_pp = babeViews.view_generator('begin',{
    trials: 1,
    name: 'begin_pp',
    title: 'Start the practice phase',
    text: 'If you feel ready to start the practice phase please press "Begin"',
    buttonText: 'Begin'
});

//In the begin screen the participant can collect its sorts before starting the experiment
const begin_main = babeViews.view_generator('begin',{
    trials: 1,
    name: 'begin_main',
    title: 'Start the main test phase',
    text: 'If you feel ready to start the main test phase please press "Begin"',
    buttonText: 'Begin'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
    // age_question: 'Alter',
    // gender_question: 'Geschlecht',
    // gender_male: 'männlich',
    // gender_female: 'weiblich',
    // gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator('thanks',{
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
    - trial_type: string - the name of the trial type as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
        More about trial life cycle - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-lifecycle

    - hook: object - option to hook and add custom functions to the view
        More about hooks - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-hooks

* All about the properties of trial - https://github.com/babe-project/babe-project/blob/master/docs/views.md#properties-of-trial
*/


// Here, we initialize a key press view
const key_press_practice = babeViews.view_generator('key_press',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.key_press_practice.length,
    // name and trial_type should be identical to the variable name
    name: 'key_press_practice',
    trial_type: 'key_press_practice',
    pause: 1000,
    fix_duration: 500,
    data: _.shuffle(trial_info.key_press_practice),
    hook: {
      after_response_enabled: check_response
    }
});

// Here, we initialize a forcedChoice view
const key_press_task = babeViews.view_generator('key_press',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.key_press_task.length,
    // name and trial_type should be identical to the variable name
    name: 'key_press_task',
    trial_type: 'key_press_task',
    pause: 1000,
    fix_duration: 500,
    data: _.shuffle(trial_info.key_press_task)
});

// There are many more templates available:
// forcedChoice, sliderRating, dropdownChoice, testboxInput, ratingScale, imageSelection, sentenceChoice, keyPress, selfPacedReading and selfPacedReading_ratingScale

// If the provided templates are not enough, we can just create custom view templates in 02_custom_views_templates.js and use them here
