import React, {useEffect} from "react";
import {Text, Stack, Heading, Image, Input, Button, Box} from "@chakra-ui/react";

import firebase from "../../firebase";
import iconList from "../../assets/icons/question-list-icon.svg";

const useQuestions = () => {
  const [questions, setQuestions] = React.useState<any>([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("questions")
      .orderBy("createdAt", "desc")
      .limit(5)
      .onSnapshot((snapshot) => {
        const newQuestion = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setQuestions(newQuestion);
      });

    return () => unsubscribe();
  }, []);

  return questions;
};

const ConsumerQuestions = () => {
  const [question, setQuestion] = React.useState("");
  const questions = useQuestions();

  const handleAdd = (e: any) => {
    e.preventDefault();
    e.target.text.value = "";

    firebase.firestore().collection("questions").add({
      question: question,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const handleRemove = (id: string) => {
    firebase.firestore().collection("questions").doc(id).delete();
  };

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
        <Stack>
          {questions.length < 1 ? (
            <Text color="blackAlpha.600" fontSize="sm">
              <b>Nadie hizo preguntas todavía.</b> ¡Hacé la primera!
            </Text>
          ) : (
            questions.map((question: any) => (
              <Box key={question.id} onClick={() => handleRemove(question.id)}>
                <Text>{question.question}</Text>
                <Stack cursor="pointer" direction="row">
                  <Image h={3} src={iconList} w={3} />
                  <Text color="gray.600">
                    ¡Hola! Sí, tenemos stock; las entregas por envíos flex son desde las 15 hasta
                    las 22hs. Esperamos tu compra. {new Date().toLocaleDateString()}
                  </Text>
                </Stack>
              </Box>
            ))
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ConsumerQuestions;
