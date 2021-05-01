import React from 'react';
import { TimeIntervalType } from '../../../../models/life-event/LifeEvent';
import { getEnumStringValues } from '../../../../utils';
import SelectQuestion from '../../../../components/select-question';

interface LifeEventTimeIntervalQuestionProps {
    onComplete: (string) => void;
}

const LifeEventTimeIntervalQuestion: React.FC<LifeEventTimeIntervalQuestionProps> = ({ onComplete }: LifeEventTimeIntervalQuestionProps) => (
    <SelectQuestion
        question="How long ago did this happen?"
        options={getEnumStringValues(TimeIntervalType)}
        label="Interval"
        onComplete={onComplete}
    />
);

export default LifeEventTimeIntervalQuestion;
