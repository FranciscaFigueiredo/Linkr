import { Content, LinkSnippetContainer } from './styles.js';
import noImage from '../../assets/noImage.png';
import treatLongString from '../../utils/treatLinkDescription.js';

export function LinkSnippet({
  post: { linkTitle, linkDescription, linkImage, url },
}) {
  return (
    <a href={url} target='_blank' rel='noreferrer'>
      <LinkSnippetContainer>
        <Content>
          {linkTitle ? (
            <span id='snippetTitle'>{linkTitle}</span>
          ) : (
            <span id='snippetTitle'>No title available for this url</span>
          )}
          {linkDescription ? (
            <span id='snippetDescription'>
              {treatLongString(linkDescription)}
            </span>
          ) : (
            <span id='snippetDescription'>
              No description available for this url
            </span>
          )}
          <span id='snippetUrl'>{url}</span>
        </Content>
        {linkImage ? (
          <img src={linkImage} alt='' />
        ) : (
          <img src={noImage} alt='' />
        )}
      </LinkSnippetContainer>
    </a>
  );
}
