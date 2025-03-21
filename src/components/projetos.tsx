"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { Wrench, X } from "lucide-react";
import {
  FaComputerMouse,
  FaGitAlt,
  FaRankingStar,
  FaRegStar,
} from "react-icons/fa6";
import Link from "next/link";

interface ProjetosProps {
  titulo: string;
  descricao: string;
  categoria1?: string;
  categoria2?: string;
  categoria3?: string;
  categoria4?: string;
  imagem: string;
  url1: string;
  url2?: string;
  url3?: string;
  url4?: string;
  repositorio?: string;
  liveView?: string;
}

export function Projetos({
  titulo,
  descricao,
  categoria1,
  categoria2,
  imagem,
  categoria3,
  categoria4,
  url1,
  url2,
  url3,
  url4,
  repositorio,
  liveView,
}: ProjetosProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex flex-col p-5 gap-3 border border-indigo-800 w-full h-[350px] rounded-lg overflow-hidden">
        <strong className="text-2xl text-indigo-200">{titulo}</strong>
        <span className="text-xs text-indigo-300">{descricao}</span>

        <div className="w-full grid grid-cols-2 gap-2">
          <span className="p-1 bg-indigo-900 text-indigo-500 flex items-center justify-center rounded-lg px-2 font-semibold hover:text-indigo-300 hover:bg-indigo-950/95 transition-all duration-300">
            {categoria1}
          </span>
          <span className="p-1 bg-indigo-900 text-indigo-500 flex items-center justify-center rounded-lg px-2 font-semibold hover:text-indigo-300 hover:bg-indigo-950/95 transition-all duration-300">
            {categoria2}
          </span>
          <span className="p-1 bg-indigo-900 text-indigo-500 flex items-center justify-center rounded-lg px-2 font-semibold hover:text-indigo-300 hover:bg-indigo-950/95 transition-all duration-300">
            {categoria3}
          </span>
          <span className="p-1 bg-indigo-900 text-indigo-500 flex items-center justify-center rounded-lg px-2 font-semibold hover:text-indigo-300 hover:bg-indigo-950/95 transition-all duration-300">
            {categoria4}
          </span>
        </div>

        <div className="flex w-full items-center justify-center">
          <Image src={imagem} alt={titulo} width={500} height={500} />
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed inset-0 md:inset-auto md:left-1/2 overflow-hidden md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 max-w-[880px] w-full md:h-[80vh] bg-indigo-950 md:rounded-md flex flex-col outline-none">
          <Dialog.Close className="absolute right-0 top-0 bg-indigo-950 p-1.5 text-indigo-400 hover:text-indigo-100">
            <X className="size-7" />
          </Dialog.Close>

          <div className="w-full h-full grid md:grid-cols-2">
            <div className="flex flex-col p-7 gap-4">
              <div className="flex flex-col gap-4">
                <strong className="text-4xl text-indigo-200">{titulo}</strong>
                <span className="text-md text-indigo-300 text-center">
                  {descricao}
                </span>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center">
                <FaRegStar fill="#c7d2fe" />
                <FaRegStar fill="#c7d2fe" />
                <FaRegStar fill="#c7d2fe" />
                <FaRankingStar size={40} fill="#c7d2fe" />
                <FaRegStar fill="#c7d2fe" />
                <FaRegStar fill="#c7d2fe" />
                <FaRegStar fill="#c7d2fe" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="p-1 py-2 bg-indigo-900 text-indigo-200 text-sm flex items-center justify-center rounded-lg px-2 font-semibold">
                  {categoria1}
                </span>
                <span className="p-1 py-2 bg-indigo-900 text-indigo-200 text-sm flex items-center justify-center rounded-lg px-2 font-semibold">
                  {categoria2}
                </span>
                <span className="p-1 py-2 bg-indigo-900 text-indigo-200 text-sm flex items-center justify-center rounded-lg px-2 font-semibold">
                  {categoria3}
                </span>
                <span className="p-1 py-2 bg-indigo-900 text-indigo-200 text-sm flex items-center justify-center rounded-lg px-2 font-semibold">
                  {categoria4}
                </span>
              </div>

              <a
                href={repositorio}
                target="_blank"
                className="flex flex-row gap-2 bg-indigo-900 text-indigo-200 text-md font-semibold py-2 px-6 rounded-lg items-center justify-center"
              >
                <FaGitAlt size={25} /> Repositório
              </a>
              <a
                href={liveView}
                target="_blank"
                className="flex flex-row gap-2 bg-indigo-900 text-indigo-200 text-md font-semibold py-2 px-6 rounded-lg items-center justify-center"
              >
                <FaComputerMouse size={25} /> Live View
              </a>
            </div>
            <Dialog.Root>
              <Dialog.Trigger>
                <div className="flex items-center justify-center p-10 target:fixed target:w-1/2 target:top-4 target:left-1/4">
                  <Image src={url1} alt={titulo} height={1000} width={1000} />
                </div>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="inset-0 fixed bg-black/50" />
                <Dialog.Content className="fixed inset-0 md:inset-auto md:left-1/2 overflow-hidden md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 max-w-[980px] w-full md:h-[80vh] bg-white-950/90 md:rounded-md flex flex-col outline-none">
                  <Dialog.Close className="absolute right-0 top-0 p-1.5 text-indigo-400 hover:text-indigo-100">
                    <X className="size-7" />
                  </Dialog.Close>
                  <div className="w-full h-full flex items-center justify-center">
                    <Image src={url1} alt={titulo} height={700} width={700} />
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
