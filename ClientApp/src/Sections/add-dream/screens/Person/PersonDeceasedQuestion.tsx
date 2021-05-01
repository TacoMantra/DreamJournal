import React from 'react';
import YesNoQuestion from '../../../../components/yes-no-question/YesNoQuestion';

interface PersonAddAnotherQuestionProps {
    onYes: () => void;
    onNo: () => void;
}

const PersonAddAnotherQuestion: React.FC<PersonAddAnotherQuestionProps> = ({ onYes, onNo }: PersonAddAnotherQuestionProps) => (
    <YesNoQuestion
        question="Is this person alive today?"
        onYes={onYes}
        onNo={onNo}
        skipText={false}
    />
);

export default PersonAddAnotherQuestion;
