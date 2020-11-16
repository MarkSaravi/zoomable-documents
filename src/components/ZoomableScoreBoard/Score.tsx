/* eslint-disable import/extensions */
import React from 'react';

import { Match, Team } from '../../types';
import '../../App.css';

type TeamProps = {
    team: Team;
}

type ScoreProps = {
    match: Match;
}

const TeamView: React.FC<TeamProps> = (props: TeamProps) => {
    const { team } = props;
    const { name, score } = team;
    return <div>{name},{score}</div>;
};

const ScoreView: React.FC<ScoreProps> = (props: ScoreProps) => {
    const { match } = props;
    const { teamA, teamB } = match;
    return <div><TeamView team={teamA} /><TeamView team={teamB} /></div>;
};

export default ScoreView;
