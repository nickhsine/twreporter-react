import PropTypes from 'prop-types'
import React from 'react'
import renderTopicContent, { Paragraph } from './render-content'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 72px;
  padding-bottom: 40px;
`

const Section = styled.div`
  position: relative;
  font-size: 18px;
  width: 38em;
  max-width: 90%;
  a {
    cursor: pointer;
    border-bottom: 1px #c71b0a solid;
    transition: 100ms color ease;
    position: relative;
    color: #262626;
    &:hover {
      color: #c71b0a;
    }
  }
`

const TopicDescription = styled(Section)`
  margin: 0 auto;
  padding-bottom: 40px; /* distacne to red line */
  /* horizontal red line */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 200px;
    margin: auto;
    border-top: 2px solid #c71b0a;
  }
`

const TeamDescription = styled(Section)`
  margin: 40px auto 0 auto;
  font-size: 15px;
  /* overwrite paragraph styles */
  ${Paragraph} {
    font-size: 15px;
    color: #808080;
    margin: 0 auto;
  }
`

const Description = props => {
  const { topicDescription, teamDescription } = props
  const topicDescElements = renderTopicContent(topicDescription)
  const teamDescElements = renderTopicContent(teamDescription)
  if (topicDescElements.length > 0 || teamDescElements.length > 0) {
    return (
      <Container>
        {topicDescElements.length > 0 ? (
          <TopicDescription>{topicDescElements}</TopicDescription>
        ) : null}
        {teamDescElements.length > 0 ? (
          <TeamDescription>{teamDescElements}</TeamDescription>
        ) : null}
      </Container>
    )
  }
  return null
}

Description.propTypes = {
  topicDescription: PropTypes.array,
  teamDescription: PropTypes.array,
}

Description.defaultProps = {
  topicDescription: [],
  teamDescription: [],
}

export default Description
