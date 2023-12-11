import React, { FC } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

interface ModalProjectProps {
    handleOpen: (index: number) => void
    isOpen: boolean
    onClose: () => void
    backdrop: string
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubLink: string;
    site: string
} 

const ModalProject: FC<ModalProjectProps> = ({
    isOpen,
    onClose,
    title,
    description,
    technologies,
    imageUrl,
    githubLink,
    site
}) => {


  return (
    <>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
      <ModalContent className="p-6">
        <ModalHeader className="text-2xl font-bold mb-4">{title}</ModalHeader>
        <ModalBody className="flex flex-col md:flex-row items-center md:space-x-6">
          <img src={imageUrl} alt={title} className="w-48 h-48 object-cover rounded-lg" />
          <div className="mt-4 md:mt-0 flex-grow">
            <p className="text-gray-600">{description}</p>
            <ul className="mt-4">
              {technologies.map((tech, techIndex) => (
                <li key={techIndex} className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </ModalBody>
        <ModalFooter className="mt-6">
          <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button>
          <a className="inline-block p-2 bg-gray-900 rounded-full transition duration-300 hover:bg-gray-800" href={site} target="_blank" rel="noopener noreferrer">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
</a>

<a className="inline-block p-2 bg-gray-900 rounded-full transition duration-300 hover:bg-gray-800" href={githubLink} target="_blank" rel="noopener noreferrer">
  <img className='h-6 w-6' src="/img/git.png" alt="" />
</a>

        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  );
}

export default ModalProject