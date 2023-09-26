import React, { ElementType, MutableRefObject } from 'react';

import { Transition as TransitionBase } from '@headlessui/react';
import { TransitionEvents } from '@headlessui/react/dist/components/transitions/transition';
import { Props } from '@headlessui/react/dist/types';
import { PropsForFeatures } from '@headlessui/react/dist/utils/render';

import { css } from '@emotion/css';
import { TwStyle } from 'twin.macro';

const DEFAULT_TRANSITION_CHILD_TAG = 'div' as const;
type NewType = MutableRefObject<HTMLDivElement>;

type TransitionChildRenderPropArg = NewType;
const Features = { None: 0, RenderStrategy: 1, Static: 2 };
const TransitionChildRenderFeatures = Features.RenderStrategy;

interface TransitionClasses {
  enter?: TwStyle | string;
  enterFrom?: TwStyle | string;
  enterTo?: TwStyle | string;
  entered?: TwStyle | string;
  leave?: TwStyle | string;
  leaveFrom?: TwStyle | string;
  leaveTo?: TwStyle | string;
}

type TransitionChildProps<TTag> = Props<TTag, TransitionChildRenderPropArg> &
  PropsForFeatures<typeof TransitionChildRenderFeatures> &
  TransitionClasses &
  TransitionEvents & { appear?: boolean };

function getPropsWithTw(props: TransitionClasses) {
  const newProps = { ...props };
  newProps.enter = typeof props.enter == 'string' ? props.enter : css(props.enter);
  newProps.enterFrom = typeof props.enterFrom == 'string' ? props.enterFrom : css(props.enterFrom);
  newProps.enterTo = typeof props.enterTo == 'string' ? props.enterTo : css(props.enterTo);
  newProps.leave = typeof props.leave == 'string' ? props.leave : css(props.leave);
  newProps.leaveFrom = typeof props.leaveFrom == 'string' ? props.leaveFrom : css(props.leaveFrom);
  newProps.leaveTo = typeof props.leaveTo == 'string' ? props.leaveTo : css(props.leaveTo);

  return newProps;
}

export function Transition<TTag extends ElementType = typeof DEFAULT_TRANSITION_CHILD_TAG>(
  props: TransitionChildProps<TTag> & { show?: boolean; appear?: boolean }
) {
  // @ts-ignore
  return <TransitionBase {...getPropsWithTw(props)} />;
}

Transition.Child = function Child<TTag extends ElementType = typeof DEFAULT_TRANSITION_CHILD_TAG>(
  props: TransitionChildProps<TTag>
) {
  // @ts-ignore
  return <TransitionBase.Child {...getPropsWithTw(props)} />;
};
Transition.Root = Transition;
