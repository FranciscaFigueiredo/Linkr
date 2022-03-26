import Buttons from './Buttons.js';
import { ModalContentContainer } from './styles.js';

export default function ModalContent() {
  return (
    <ModalContentContainer>
      <span id='ModalQuestion'>Are you sure you want to delete this post?</span>
      <Buttons />
    </ModalContentContainer>
  );
}
