// import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import codeMockupImg from "../assets/code-mockup.png";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  // const [createSubscriber, { loading }] = useMutation(
  //   CREATE_SUBSCRIBER_MUTATION
  // );
  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event?.preventDefault();

    const { data } = await createSubscriber({
      variables: { name: userName, email: userEmail },
    });

    // console.log(data.createSubscriber.id);

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex justify-between items-center mt-20">
        <div className="max-w-[640px]">
          <Logo />
          <strong className="mt-8 font-sans text-[2.5rem] leading-[125%]">
            Construa uma{" "}
            <span className="text-blue-500">aplicação completa</span>,<br /> do
            zero, com <span className="text-blue-500">React</span>
          </strong>
          <p className="mt-4 leading-relaxed text-gray-200">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais
            <br /> utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <p className="font-bold text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Seu melhor e-mail"
              onChange={(event) => {
                setUserEmail(event.target.value);
              }}
            />
            <button
              disabled={loading}
              className="mt-4 uppercase bg-green-500 rounded font-bold text-sm py-4 hover:bg-green-700 transition-colors disabled:opacity-50"
              type="submit"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img className="max-w-[1100px]" src={codeMockupImg} alt="" />
    </div>
  );
}
