import { Content, LinkSnippetContainer } from './styles.js';

export function LinkSnippet({
  post: { linkTitle, linkDescription, linkImage, url },
}) {
  return (
    <LinkSnippetContainer>
      <Content>
        <span id='snippetTitle'>{linkTitle}</span>
        <span id='snippetDescription'>{linkDescription}</span>
        <span id='snippetUrl'>{url}</span>
      </Content>
      <img src={linkImage} alt='url' />
    </LinkSnippetContainer>
  );
}
