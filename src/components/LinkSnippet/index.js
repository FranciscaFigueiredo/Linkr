import { Content, LinkSnippetContainer } from './styles.js';

export function LinkSnippet({ children: [title, description, image, url] }) {
  return (
    <LinkSnippetContainer>
      <Content>
        <span id='snippetTitle'>{title}</span>
        <span id='snippetDescription'>{description}</span>
        <span id='snippetUrl'>{url}</span>
      </Content>
      <img src={image} alt='url' />
    </LinkSnippetContainer>
  );
}
