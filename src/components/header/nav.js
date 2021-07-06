/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 01/07/2021 - 17:22:21
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/07/2021
    * - Author          :
    * - Modification    :
**/
/* This example requires Tailwind CSS v2.0+ */
import React, {useState} from 'react'
import { Fragment } from 'react'
import Button from '../Buttons/Standard/button'
import Logo from '../Logo/logo.js'
import "./hovers.scss";
import Linky from '../Effects/Linky';
import MobileButton from '../Buttons/Mobile/button'



/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <Popover className="relative bg-black-gradient">
      {({ open }) => (
        <>
          <div className="mx-10 max-w-7xl lg:max-w-full sm:px-6 lg:mb-10 lg:mx-10 bg-black-gradient">
            <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                <Logo type='abbreviation' classes='mt-2 inline-block md:hidden h-auto w-auto'  />
                <Logo type='standard' classes='hidden md:block h-auto w-auto'  />
                </a>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-50 hover:text-gray-50 hover:bg-gradient focus:ring-inset ">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-100' : 'text-gray-50',
                          'group rounded-md inline-flex  items-center text-base font-medium hover:text-gray-50   '
                        )}
                      >
                        <span><Linky text="Services" /></span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-50'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 bg-black-gradient"
                        >
                          <div className="overflow-hidden rounded-lg">
                            <div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                              {solutions.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-start p-3 -m-3 rounded-lg hover:bg-gradient"
                                >
                                  <item.icon className="flex-shrink-0 w-6 h-6 text-white" aria-hidden="true" />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-50">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-50">{item.description}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className="px-5 py-5 space-y-6 bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                              {callsToAction.map((item) => (
                                <div key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="flex items-center p-3 -m-3 text-base font-medium rounded-md text-gray-50 hover:bg-gray-100"
                                  >
                                    <item.icon className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                                    <span className="ml-3">{item.name}</span>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <a href="#" className="text-base font-medium"> <span><Linky text="Pricing" /></span>



                </a>
                <a href="#" className="text-base font-medium"> <span><Linky text="Docs" /></span>



</a>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-100' : 'text-gray-50',
                          'group rounded-md inline-flex items-center text-base font-medium hover:text-gray-50    '
                        )}
                      >
 <a href="#" className="text-base font-medium"> <span><Linky text="Pricing" /></span>



</a>                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-50'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0"
                        >
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-black-gradient">
                            <div className="relative grid gap-6 px-5 py-6 bg-black-gradient sm:gap-8 sm:p-8">
                              {resources.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-start p-3 -m-3 rounded-lg hover:bg-gradient"
                                >
                                  <item.icon className="flex-shrink-0 w-6 h-6 text-white" aria-hidden="true" />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-50">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-50">{item.description}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                              <div>
                                <h3 className="text-sm font-medium tracking-wide uppercase text-gray-50">
                                  Recent Posts
                                </h3>
                                <ul className="mt-4 space-y-4">
                                  {recentPosts.map((post) => (
                                    <li key={post.id} className="text-base truncate">
                                      <a href={post.href} className="font-medium text-gray-50 hover:text-gray-100">
                                        {post.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-5 text-sm">
                                <a href="#" className="font-medium text-white hover:text-gray-50">
                                  {' '}
                                  View all posts <span aria-hidden="true">&rarr;</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
              <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
              <Button btntext="Schedule A Call" btnlink="hhh" />

              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform bg-black-gradient md:hidden"
            >
              <div className="divide-y-2 rounded-lg divide-gray-50 bg-black-gradient">
                <div className="px-5 pt-5 pb-6 bg-black-gradient">
                  <div className="flex items-center justify-between bg-black-gradient">
                    <div>
                <Logo type='standard' classes='block h-auto w-auto'  />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-100 rounded-md hover:text-gray-50 hover:bg-gray-100 focus:ring-inset ">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center p-3 -m-3 rounded-md hover:bg-gradient"
                        >
                          <item.icon className="flex-shrink-0 w-6 h-6 text-white" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-gray-50">{item.name}</span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="px-5 py-6 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a href="#" className="text-base font-medium text-gray-50 hover:text-gray-100">
                      Pricing
                    </a>

                    <a href="#" className="text-base font-medium text-gray-50 hover:text-gray-100">
                      Docs
                    </a>
                    {resources.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-50 hover:text-gray-100"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div>
                  <MobileButton btntext="Schedule A Call" btnlink="hhh" />

                    <p className="mt-6 text-base font-medium text-center text-gray-50">
                      Existing customer?{' '}
                      <a href="#" className="text-white hover:text-gray-50">
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}




