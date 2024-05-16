$(document).ready(function() {
    let mode = 'individual';

    $('#individualMode').click(function() {
        mode = 'individual';
        alert('Individual Mode Selected');
    });

    $('#generalMode').click(function() {
        mode = 'general';
        alert('General Mode Selected');
    });

    $('#teamMode').click(function() {
        mode = 'team';
        alert('Team Mode Selected');
    });

    $('#sendMessage').click(function() {
        const userMessage = $('#userMessage').val();

        if (!userMessage.trim()) {
            alert('Please enter a message');
            return;
        }

        $.ajax({
            url: '/api/chat',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                mode: mode,
                message: userMessage
            }),
            success: function(response) {
                $('#chatResponse').text(response.response);
                $('#userMessage').val('');
            }
        });
    });
});
