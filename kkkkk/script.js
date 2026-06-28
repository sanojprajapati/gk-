const correctAnswers = {
    q1: 'b', // बाघ
    q2: 'b', // H2O
    q3: 'b', // CPU
    q4: 'c', // माता
    q5: 'b', // 65
    q6: 'c', // नई दिल्ली
    q7: 'a', // Hyper Text Markup Language
    q8: 'c', // बृहस्पति
    q9: 'b', // आगरा
    q10: 'c' // 12
};

document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
    
    // Check सभी questions
    for (let key in correctAnswers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === correctAnswers[key]) {
            score++;
        }
    }
    
    // Result दिखाओ
    document.getElementById('quizBox').style.display = 'none';
    document.getElementById('resultBox').style.display = 'block';
    document.getElementById('scoreDisplay').textContent = `${score}/${totalQuestions}`;
    
    // Message set करो
    let msg = '';
    if (score === 10) msg = 'बहुत बढ़िया! Full Marks 🎉';
    else if (score >= 7) msg = 'शाबाश! आप पास हो गए 👍';
    else if (score >= 5) msg = 'ठीक है, और मेहनत करो 📚';
    else msg = 'फिर से पढ़ाई करो 😅';
    
    document.getElementById('message').textContent = msg;
});