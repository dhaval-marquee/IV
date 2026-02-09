function loadTestCode() {
    if (!$('body').hasClass('speakers_iv')) {
        $('body').addClass('speakers_iv');
        $('#speakerprofile #speakerbio #addspeaker.request').text('Request Information');
    }
}
loadTestCode();