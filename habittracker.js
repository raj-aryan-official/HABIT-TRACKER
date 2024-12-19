
        

        
            document.querySelectorAll('#progress-button').forEach(button => {
                button.addEventListener('click', () => {
                    window.location.href = 'progress.html';
                });
            });
            
    

        function viewStatistics() {
            alert('Viewing statistics functionality coming soon!');
        }

        function addHabit() {
            alert('Add habit functionality coming soon!');
        }

        function removeHabit() {
            alert('Remove habit functionality coming soon!');
        }

        const calendarContent = document.getElementById('calendar-content');
        calendarContent.addEventListener('mouseenter', () => {
            calendarContent.innerText = 'Hovered over calendar! Dynamic data coming soon.';
        });
        calendarContent.addEventListener('mouseleave', () => {
            calendarContent.innerText = '[Calendar goes here]';
        });
