import React, {useEffect} from "react";
import {Text, Stack, Heading, Image, Input, Button, Box} from "@chakra-ui/react";

import {db} from "../../firebase";

const ConsumerQuestions = () => {
  const [questions, setQuestions] = React.useState<any[]>([]);
  const [question, setQuestion] = React.useState("");

  useEffect(() => {
    db.collection("questions").onSnapshot((snap) => {
      questions.concat(snap.docs);
    });
  }, []);

  function handleAdd(e: any) {
    e.preventDefault();
    e.target.text.value = "";

    db.collection("questions").add({
      question: question,
    });
  }

  return (
    <Stack spacing={10} w="100%">
      <Heading fontSize="2xl" fontWeight="400" pb={4}>
        Preguntas y respuestas
      </Heading>
      <Stack>
        <Text fontSize="lg" fontWeight="bold">
          Preguntale al vendedor
        </Text>
        <form onSubmit={handleAdd}>
          <Stack align="center" direction="row">
            <Input
              name="text"
              placeholder="Escribí tu pregunta..."
              size="lg"
              type="text"
              onChange={(e) => setQuestion(e.target.value)}
            />
            <Button colorScheme="twitter" px={8} size="lg" type="submit">
              Preguntar
            </Button>
          </Stack>
        </form>
      </Stack>
      <Stack spacing={6}>
        <Text fontSize="lg" fontWeight="bold">
          Últimas realizadas
        </Text>
        <Stack direciton="row">
          {questions.map((question, index) => (
            <Box key={index}>
              <Text>{question}</Text>
              <Stack direction="row">
                <Image h={3} src="src/assets/icons/question-list-icon.svg" w={3} />
                <Text color="gray.600">
                  ¡Hola! Sí, tenemos stock; las entregas por envíos flex son desde las 15 hasta las
                  22hs. Esperamos tu compra. {new Date().toLocaleDateString()}
                </Text>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ConsumerQuestions;
