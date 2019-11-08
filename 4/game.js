let game = {
    score: 0,
    nextQuestions: 0,
    run(){
        if (!this.isQuestions()) {
             console.log(`Игра окончена, ваш счет ${this.score}`);
            this.nextQuestions = 0;
            this.score = 0;
            if (confirm('Хотите с играть еще раз?')) {
                this.run();
            }
            return;
        }
        let result = leader.askQuestion(questions[this.nextQuestions]);
        if (result) {
            this.score++;
        }
        this.nextQuestions++;
        this.run();
    },
    isQuestions(){
        return questions[this.nextQuestions] !== undefined;
    }
};

console.log('Наберите в консоли game.run(), чтобы начать игру');