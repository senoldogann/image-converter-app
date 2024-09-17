app.factory('ExerciseService', function() {
    var exercises = [
        {
            name: 'Koşu',
            description: 'Koşu, kardiyo kapasitenizi artıran harika bir egzersizdir.',
            benefits: ['Kalp sağlığını güçlendirir', 'Kilo vermeye yardımcı olur', 'Dayanıklılığı artırır']
        },
        {
            name: 'Yoga',
            description: 'Yoga, esneklik ve zihinsel dengeyi geliştiren bir egzersizdir.',
            benefits: ['Stresi azaltır', 'Esnekliği artırır', 'Kas gücünü geliştirir']
        },
        {
            name: 'Ağırlık Kaldırma',
            description: 'Ağırlık kaldırma, kas kütlesini artırmak için en etkili egzersizlerden biridir.',
            benefits: ['Kas gücünü artırır', 'Metabolizmayı hızlandırır', 'Kemik yoğunluğunu artırır']
        }
    ];

    return {
        getExercises: function() {
            return exercises;
        }
    };
});
