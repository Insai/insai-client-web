import React from "react";
import {
  Card,
  Button,
  ButtonGroup,
  Icon,
  Tooltip,
  Position
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import styled from "styled-components";
import moment from "moment";

const ListContainer = styled.section`
  height: 100%;
`;

const CardItem = styled(Card)`
  display: flex;
  justify-content: space-between;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  & svg {
    margin-right: 20px;
  }
`;

const CardTooltip = styled.div`
  width: 300px;
  & p {
    font-weight: 100;
    font-size: 12px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  & span {
    font-size: 10px;
    margin: 1px;
  }
  & p {
    width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
  }
`;

const Info = ({ item }) => (
  <InfoContainer>
    <span>
      {moment.unix(item.time_added).fromNow()}
      {Number(item.word_count) > 0 && `, ${item.word_count} words`}
      {item.time_to_read && `, ${item.time_to_read} min.`}
    </span>
    <Tooltip
      content={
        item.excerpt ? (
          <CardTooltip>
            <p>{item.excerpt}</p>
          </CardTooltip>
        ) : null
      }
      position={Position.BOTTOM_LEFT}
    >
      <a href={item.resolved_url}>
        <p>{item.resolved_title || item.resolved_url}</p>
      </a>
    </Tooltip>
  </InfoContainer>
);

const CardActions = ({}) => (
  <ButtonGroup minimal>
    <Button icon="tick" />
    <Button icon="star" />
    <Button icon="archive" />
  </ButtonGroup>
);

/**
 * Article Item
 */
const ArticleItem = ({ item }) => (
  <CardItem>
    <CardContent>
      <Icon icon={IconNames.ALIGN_LEFT} />
      <Info item={item} />
    </CardContent>
    <CardActions />
  </CardItem>
);

/**
 * Application Item
 */
const ApplicationItem = ({ item }) => (
  <CardItem>
    <CardContent>
      <Icon icon={IconNames.APPLICATION} />
      <Info item={item} />
    </CardContent>
    <CardActions />
  </CardItem>
);

export default class extends React.PureComponent {
  render() {
    return (
      <ListContainer>
        {this.props.items.map(item => {
          switch (item.is_article) {
            case "1":
              return <ArticleItem item={item} key={item.item_id} />;
            default:
              return <ApplicationItem item={item} key={item.item_id} />;
          }
        })}
      </ListContainer>
    );
  }
}
