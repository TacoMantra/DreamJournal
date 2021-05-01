import React from 'react';
import YesNoQuestion from '../../../../components/yes-no-question/YesNoQuestion';

interface LifeEventYesNoQuestionProps {
    onYes: () => void;
    onNo: () => void;
}

const LifeEventYesNoQuestion: React.FC<LifeEventYesNoQuestionProps> = ({ onYes, onNo }: LifeEventYesNoQuestionProps) => (
    <YesNoQuestion
        question="Does your dream relate to any events from your life?"
        onYes={onYes}
        onNo={onNo}
    />
);

export default LifeEventYesNoQuestion;
