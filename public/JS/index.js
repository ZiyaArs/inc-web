var quill = new Quill('#editor', {
    modules: {
        toolbar: [
            [{
                header: [1, 2, 3, false]
            }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block']
        ]
    },
    theme: 'snow'
});


$('#saveArticle').click(function () {
    var out = quill.root.innerHTML;
    var beg = $('input[name=beg]').val(out);
    var deskrip = out.replace(/<[^>]+>/g, '');
    var deskript = deskrip.slice(0, 180);
    var desk = $('input[name=desk]').val(deskript + '...');
});