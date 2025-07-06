import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const quizQuestions = [
    {
      question: "Какой цвет является основным в костюме Леди Баг?",
      options: ["Синий", "Красный", "Зеленый", "Желтый"],
      correct: 1,
      explanation:
        "Леди Баг носит красный костюм с черными горошинами, символизирующий божью коровку!",
    },
    {
      question: "Как зовут квами Леди Баг?",
      options: ["Плагг", "Тикки", "Трикс", "Дусу"],
      correct: 1,
      explanation:
        "Тикки - это квами удачи, который дает Маринет силы Леди Баг!",
    },
    {
      question: "Какую силу имеет Супер-Кот?",
      options: ["Удача", "Разрушение", "Исцеление", "Телепортация"],
      correct: 1,
      explanation: "Супер-Кот обладает силой разрушения - Катаклизм!",
    },
    {
      question: "В каком городе происходят события мультсериала?",
      options: ["Лондон", "Нью-Йорк", "Париж", "Токио"],
      correct: 2,
      explanation: "Все приключения происходят в прекрасном Париже!",
    },
    {
      question: "Как называется оружие Леди Баг?",
      options: ["Йо-йо", "Посох", "Меч", "Лук"],
      correct: 0,
      explanation: "Леди Баг использует магическое йо-йо, которое может всё!",
    },
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (answerIndex === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const characters = [
    {
      name: "Маринет / Леди Баг",
      description:
        "Главная героиня, которая превращается в супергероя Леди Баг",
      power: "Удача",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      name: "Адриан / Супер-Кот",
      description: "Напарник Леди Баг, превращается в Супер-Кота",
      power: "Разрушение",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      name: "Бражник",
      description: "Главный злодей, создающий акуматизированных монстров",
      power: "Акуматизация",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const episodes = [
    {
      title: "Штормовая погода",
      season: "Сезон 1",
      description: "Первая встреча Леди Баг и Супер-Кота",
    },
    {
      title: "Пузырёк",
      season: "Сезон 1",
      description: "Борьба с акуматизированным злодеем-пузырём",
    },
    {
      title: "Мистер Голубь",
      season: "Сезон 1",
      description: "Учитель превращается в суперзлодея",
    },
    {
      title: "Леди Wi-Fi",
      season: "Сезон 1",
      description: "Алья становится цифровым злодеем",
    },
    {
      title: "Принцесса Хрупкость",
      season: "Сезон 1",
      description: "Хлоя превращается в злобную принцессу",
    },
    {
      title: "Чёрная Вдова",
      season: "Сезон 1",
      description: "Надя Шамак становится паучихой",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
              <h1 className="text-xl font-bold text-gray-900">
                Леди Баг и Супер-Кот
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#characters"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Персонажи
              </a>
              <a
                href="#episodes"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Эпизоды
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Галерея
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-red-600">Леди Баг</span>
            <span className="text-gray-900"> и </span>
            <span className="text-yellow-600">Супер-Кот</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Приключения двух парижских супергероев, которые защищают город от
            злодеев и их акуматизированных монстров
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
              Смотреть эпизоды
            </Button>
            <Button
              variant="outline"
              className="border-yellow-600 text-yellow-600 hover:bg-yellow-50 px-8 py-3 text-lg"
            >
              Узнать о персонажах
            </Button>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Главные персонажи
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {characters.map((character, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow duration-300 ${character.bgColor} border-2`}
              >
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-white mx-auto mb-4 flex items-center justify-center">
                    {character.name.includes("Леди Баг") && (
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-black rounded-full"></div>
                      </div>
                    )}
                    {character.name.includes("Супер-Кот") && (
                      <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                        <Icon name="Cat" className="w-6 h-6 text-black" />
                      </div>
                    )}
                    {character.name.includes("Бражник") && (
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                        <Icon name="Zap" className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>
                  <CardTitle className={`text-center ${character.color}`}>
                    {character.name}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {character.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-2">
                      Сила: {character.power}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section id="episodes" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Популярные эпизоды
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {episodes.map((episode, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{episode.title}</CardTitle>
                    <Badge variant="outline">{episode.season}</Badge>
                  </div>
                  <CardDescription>{episode.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Icon name="Play" className="w-4 h-4 mr-2" />
                    Смотреть
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section
        id="quiz"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-black/5"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            🎯 Викторина о персонажах
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-red-100">
            {!showScore ? (
              <div className="space-y-6">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Вопрос {currentQuestion + 1} из {quizQuestions.length}
                    </span>
                    <span className="text-sm font-medium text-red-600">
                      Очки: {score}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Question */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {quizQuestions[currentQuestion].question}
                  </h3>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quizQuestions[currentQuestion].options.map(
                    (option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showResult}
                        className={`p-4 rounded-lg border-2 transition-all duration-200 text-left font-medium ${
                          selectedAnswer === index
                            ? index === quizQuestions[currentQuestion].correct
                              ? "bg-green-100 border-green-500 text-green-800"
                              : "bg-red-100 border-red-500 text-red-800"
                            : showResult &&
                                index === quizQuestions[currentQuestion].correct
                              ? "bg-green-100 border-green-500 text-green-800"
                              : "bg-gray-50 border-gray-200 hover:border-red-300 hover:bg-red-50"
                        } ${showResult ? "cursor-not-allowed" : "cursor-pointer hover:scale-105"}`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span>{option}</span>
                        </div>
                      </button>
                    ),
                  )}
                </div>

                {/* Explanation */}
                {showResult && (
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-800 font-medium">
                      💡 {quizQuestions[currentQuestion].explanation}
                    </p>
                  </div>
                )}

                {/* Next Button */}
                {showResult && (
                  <div className="text-center mt-8">
                    <Button
                      onClick={handleNextQuestion}
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
                    >
                      {currentQuestion + 1 === quizQuestions.length
                        ? "Показать результат"
                        : "Следующий вопрос"}
                      <Icon name="ChevronRight" className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              /* Score Screen */
              <div className="text-center space-y-6">
                <div className="mb-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-red-600">
                        {score}/{quizQuestions.length}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Викторина завершена!
                  </h3>
                  <p className="text-lg text-gray-600">
                    {score === quizQuestions.length &&
                      "🎉 Отлично! Ты настоящий эксперт по Леди Баг!"}
                    {score >= quizQuestions.length * 0.8 &&
                      score < quizQuestions.length &&
                      "👏 Замечательно! Ты хорошо знаешь героев!"}
                    {score >= quizQuestions.length * 0.6 &&
                      score < quizQuestions.length * 0.8 &&
                      "👍 Неплохо! Стоит пересмотреть серии!"}
                    {score < quizQuestions.length * 0.6 &&
                      "📚 Время изучать мир Леди Баг и Супер-Кота!"}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={restartQuiz}
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
                  >
                    <Icon name="RotateCcw" className="w-5 h-5 mr-2" />
                    Пройти еще раз
                  </Button>
                  <Button
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 text-lg"
                    onClick={() =>
                      document
                        .getElementById("episodes")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <Icon name="Play" className="w-5 h-5 mr-2" />
                    Смотреть эпизоды
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section
        id="quiz"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-pink-50"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            🐞 Викторина о персонажах
          </h2>

          {!showScore ? (
            <Card className="border-2 border-red-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-red-600 to-pink-600 text-white">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl">
                    Вопрос {currentQuestion + 1} из {quizQuestions.length}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Icon name="Heart" className="w-5 h-5 text-white" />
                    <span className="text-lg font-bold">{score}</span>
                  </div>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 mt-4">
                  <div
                    className="bg-white h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">
                  {quizQuestions[currentQuestion].question}
                </h3>

                <div className="space-y-3">
                  {quizQuestions[currentQuestion].options.map(
                    (option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showResult}
                        className={`w-full p-4 rounded-lg text-left transition-all duration-300 border-2 ${
                          selectedAnswer === index
                            ? index === quizQuestions[currentQuestion].correct
                              ? "bg-green-100 border-green-500 text-green-800"
                              : "bg-red-100 border-red-500 text-red-800"
                            : showResult &&
                                index === quizQuestions[currentQuestion].correct
                              ? "bg-green-100 border-green-500 text-green-800"
                              : "bg-white border-gray-200 hover:bg-red-50 hover:border-red-300"
                        } ${showResult ? "cursor-not-allowed" : "cursor-pointer hover:shadow-md"}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{option}</span>
                          {showResult &&
                            index ===
                              quizQuestions[currentQuestion].correct && (
                              <Icon
                                name="CheckCircle"
                                className="w-5 h-5 text-green-600"
                              />
                            )}
                          {showResult &&
                            selectedAnswer === index &&
                            index !==
                              quizQuestions[currentQuestion].correct && (
                              <Icon
                                name="XCircle"
                                className="w-5 h-5 text-red-600"
                              />
                            )}
                        </div>
                      </button>
                    ),
                  )}
                </div>

                {showResult && (
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Icon
                        name="Info"
                        className="w-5 h-5 text-blue-600 mt-0.5"
                      />
                      <div>
                        <p className="text-blue-800 font-medium">
                          {selectedAnswer ===
                          quizQuestions[currentQuestion].correct
                            ? "Правильно! 🎉"
                            : "Неправильно 😔"}
                        </p>
                        <p className="text-blue-700 text-sm mt-1">
                          {quizQuestions[currentQuestion].explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {showResult && (
                  <div className="mt-6 text-center">
                    <Button
                      onClick={handleNextQuestion}
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
                    >
                      {currentQuestion + 1 < quizQuestions.length
                        ? "Следующий вопрос"
                        : "Показать результат"}
                      <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card className="border-2 border-red-200 shadow-xl text-center">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-12 h-12 bg-black rounded-full"></div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    Викторина завершена!
                  </h3>
                  <p className="text-xl text-gray-600">
                    Ваш результат:{" "}
                    <span className="font-bold text-red-600">{score}</span> из{" "}
                    {quizQuestions.length}
                  </p>
                </div>

                <div className="mb-6">
                  {score === quizQuestions.length && (
                    <div className="text-green-600 mb-4">
                      <Icon name="Trophy" className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-lg font-semibold">
                        Поздравляем! Вы настоящий знаток мультсериала! 🏆
                      </p>
                    </div>
                  )}
                  {score >= quizQuestions.length * 0.7 &&
                    score < quizQuestions.length && (
                      <div className="text-yellow-600 mb-4">
                        <Icon name="Star" className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-lg font-semibold">
                          Отличный результат! Вы хорошо знаете персонажей! ⭐
                        </p>
                      </div>
                    )}
                  {score < quizQuestions.length * 0.7 && (
                    <div className="text-blue-600 mb-4">
                      <Icon
                        name="BookOpen"
                        className="w-12 h-12 mx-auto mb-2"
                      />
                      <p className="text-lg font-semibold">
                        Стоит лучше изучить персонажей! 📚
                      </p>
                    </div>
                  )}
                </div>

                <Button
                  onClick={restartQuiz}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 mr-4"
                >
                  <Icon name="RotateCcw" className="w-4 h-4 mr-2" />
                  Пройти еще раз
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Галерея скриншотов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-video bg-gradient-to-br from-red-100 to-yellow-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Icon
                      name="Image"
                      className="w-12 h-12 text-gray-400 mx-auto mb-2"
                    />
                    <p className="text-gray-500 text-sm">Скриншот {item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
              <span className="text-xl font-bold">Леди Баг и Супер-Кот</span>
            </div>
            <div className="flex items-center space-x-4">
              <Icon name="MapPin" className="w-5 h-5" />
              <span>Париж, Франция</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Miraculous Ladybug. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
