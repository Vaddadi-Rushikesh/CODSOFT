document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector('input[type="text"]');

    function display(value) {
        input.value += value;
    }

    function Clear() {
        input.value = '';
    }

    function del() {
        input.value = input.value.slice(0, -1);
    }

    function Calculate() {
        try {
            input.value = eval(input.value);
        } catch (error) {
            input.value = 'Error';
        }
    }

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === '=') {
                Calculate();
            } else if (this.textContent === 'AC') {
                Clear();
            } else if (this.textContent === 'DE') {
                del();
            } else {
                display(this.textContent);
            }
        });
    });
});
