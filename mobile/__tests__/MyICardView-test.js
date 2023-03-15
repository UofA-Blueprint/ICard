import React from 'react';
import renderer, { act } from 'react-test-renderer';
import MyICardView from '../src/views/MyICardView';

//Just an experimental test. Still have to be worked on

test('refresh control is active or not', async () => {
    const component = render (
        <MyICardView/>
    )

    const scrollViewComp = component.getByTestId('refreshControl');
    expect(scrollViewComp).toBeDefined();

    const {refreshControl} = scrollViewComp.props;

    await act(async () => {
        refreshControl.props.onRefresh();
    })




})