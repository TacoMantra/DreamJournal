import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Dream from '../../models/dream';
import Place from '../../models/place';
import LifeEvent from '../../models/life-event';
import Person, { PersonType as PersonTypeEnum } from '../../models/person/Person';
import EmotionQuestion from './screens/Emotion';
import { PlaceNameQuestion, PlaceRealismQuestion, PlaceTypeQuestion } from './screens/Place';
import {
    PersonDeceasedQuestion, PersonFamiliarityQuestion, PersonNameQuestion, PersonRelationshipQuestion, PersonTypeQuestion, PersonYesNoQuestion, PersonAddAnotherQuestion,
} from './screens/Person';
import {
    LifeEventDescriptionQuestion, LifeEventTimeIntervalQuestion, LifeEventTypeQuestion, LifeEventYesNoQuestion,
} from './screens/LifeEvent';
import Success from './screens/Success';
import DescriptionQuestion from './screens/Description';
import { createDreamForUser } from '../../features/dreams';
import mockUserId from '../../consts/mocks';

enum Questions {
    EmotionType,
    PlaceType,
    PlaceRealism,
    PlaceName,
    PersonYesNo,
    PersonType,
    PersonFamiliarity,
    PersonRelationship,
    PersonName,
    PersonDeceased,
    PersonAddAnother,
    LifeEventYesNo,
    LifeEventType,
    LifeEventInterval,
    LifeEventDescription,
    Description,
    SuccessScreen,
}

const AddDream = (): React.FC => {
    const dispatch = useDispatch();

    const [dream, setDream] = useState(Dream.create());
    const [place, setPlace] = useState(Place.create());
    const [person, setPerson] = useState(Person.create());
    const [lifeEvent, setLifeEvent] = useState(LifeEvent.create());
    const [dreamComplete, setDreamComplete] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(Questions.EmotionType);

    const handleQuestionAnswer = <T extends unknown>(getter: T, setter: React.Dispatch<React.SetStateAction<T>>, key: keyof(T), value: string, nextQuestion?: Questions) => {
        setter({
            ...getter,
            [key]: value,
        });

        if (nextQuestion) {
            setCurrentQuestion(nextQuestion);
        }
    };

    const handlePersonTypeAnswer = (value: string) => {
        setPerson({
            ...person,
            type: value,
        });

        if (value === PersonTypeEnum.Relationship) {
            setCurrentQuestion(Questions.PersonFamiliarity);
        } else {
            setCurrentQuestion(Questions.PersonName);
        }
    };

    const handlePersonNameAnswer = (firstName: string, lastName: string) => {
        setPerson({
            ...person,
            firstName,
            lastName,
        });

        setCurrentQuestion(Questions.PersonDeceased);
    };

    const saveDescriptionAndPostDream = (description: string) => {
        setDream({
            ...dream,
            place: { ...place },
            lifeEvent: { ...lifeEvent },
            description,
        });
        setDreamComplete(true);
    };

    const addPerson = () => {
        setDream({
            ...dream,
            people: [
                ...dream.people,
                person,
            ],
        });
    };

    useEffect(() => {
        // Place should never be null on complete, await a value
        if (dreamComplete && dream.place !== null) {
            dispatch(createDreamForUser({
                userId: mockUserId,
                dream,
            }));
            setCurrentQuestion(Questions.Success);
        }
    }, [dreamComplete, dream, dispatch]);

    switch (currentQuestion) {
        case Questions.EmotionType:
            return <EmotionQuestion onComplete={(value) => handleQuestionAnswer(dream, setDream, 'emotion', value, Questions.PlaceType)} />;
        case Questions.PlaceType:
            return <PlaceTypeQuestion onComplete={(value) => handleQuestionAnswer(place, setPlace, 'type', value, Questions.PlaceRealism)} />;
        case Questions.PlaceRealism:
            return <PlaceRealismQuestion onComplete={(value) => handleQuestionAnswer(place, setPlace, 'realism', value, Questions.PlaceName)} />;
        case Questions.PlaceName:
            return <PlaceNameQuestion onComplete={(value) => handleQuestionAnswer(place, setPlace, 'name', value, Questions.PersonYesNo)} />;
        case Questions.PersonYesNo:
            return <PersonYesNoQuestion onYes={() => setCurrentQuestion(Questions.PersonType)} onNo={() => setCurrentQuestion(Questions.LifeEventYesNo)} />;
        case Questions.PersonType:
            return <PersonTypeQuestion onComplete={(value) => handlePersonTypeAnswer(value)} />;
        case Questions.PersonFamiliarity:
            return <PersonFamiliarityQuestion onComplete={(value) => handleQuestionAnswer(person, setPerson, 'familiarity', value, Questions.PersonRelationship)} />;
        case Questions.PersonRelationship:
            return <PersonRelationshipQuestion onComplete={(value) => handleQuestionAnswer(person, setPerson, 'relationshipToUser', value, Questions.PersonName)} />;
        case Questions.PersonName:
            return (
                <PersonNameQuestion onComplete={(values) => { handlePersonNameAnswer(values.firstName, values.lastName); }} />
            );
        case Questions.PersonDeceased:
            return (
                <PersonDeceasedQuestion
                    onYes={() => handleQuestionAnswer(person, setPerson, 'deceased', false, Questions.PersonAddAnother)}
                    onNo={() => handleQuestionAnswer(person, setPerson, 'deceased', true, Questions.PersonAddAnother)}
                />
            );
        case Questions.PersonAddAnother:
            return (
                <PersonAddAnotherQuestion
                    onYes={() => {
                        addPerson();
                        setPerson(Person.create());
                        setCurrentQuestion(Questions.PersonType);
                    }}
                    onNo={() => {
                        addPerson();
                        setCurrentQuestion(Questions.LifeEventYesNo);
                    }}
                />
            );
        case Questions.LifeEventYesNo:
            return <LifeEventYesNoQuestion onYes={() => setCurrentQuestion(Questions.LifeEventType)} onNo={() => setCurrentQuestion(Questions.Description)} />;
        case Questions.LifeEventType:
            return <LifeEventTypeQuestion onComplete={(value) => handleQuestionAnswer(lifeEvent, setLifeEvent, 'type', value, Questions.LifeEventInterval)} />;
        case Questions.LifeEventInterval:
            return <LifeEventTimeIntervalQuestion onComplete={(value) => handleQuestionAnswer(lifeEvent, setLifeEvent, 'timeOfOccurrence', value, Questions.LifeEventDescription)} />;
        case Questions.LifeEventDescription:
            return <LifeEventDescriptionQuestion onComplete={(value) => handleQuestionAnswer(lifeEvent, setLifeEvent, 'description', value, Questions.Description)} />;
        case Questions.Description:
            return (
                <DescriptionQuestion onComplete={(value) => { saveDescriptionAndPostDream(value); }} />
            );
        case Questions.SuccessScreen:
            return <Success />;
        default:
            return <Success />;
    }
};

export const AddDreamPath = '/add-dream';

export default AddDream;
