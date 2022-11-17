/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState('hidden');
  const [ddPost, setDdPost] = React.useState('hidden');
  const [ddOrg, setDdOrg] = React.useState('hidden');

  const postTrigger = () => {
    if (ddPost === 'hidden') {
      setDdPost('');
      setDdOrg('hidden');
    } else {
      setDdPost('hidden');
    }
  }

  const orgTrigger = () => {
    if (ddOrg === 'hidden') {
      setDdOrg('');
      setDdPost('hidden');
    } else {
      setDdOrg('hidden');
    }
  }

  return (
    <>
      <nav className='md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-8 bg-darkPrimary'>
        <div className='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto'>
          {/* Toggler */}
          {/* <button
            className='cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
            type='button'
            onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}>
            <i className='fas fa-bars'></i>
          </button> */}
          {/* Collapse */}
          <div
            className={
              'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
              collapseShow
            }>
            {/* Collapse header */}
            {/* <div className='md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200'>
              <div className='flex flex-wrap'>
                <div className='w-6/12'>
                  <Link
                    className='md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0'
                    to='/'>
                    Notus React
                  </Link>
                </div>
                <div className='w-6/12 flex justify-end'>
                  <button
                    type='button'
                    className='cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
                    onClick={() => setCollapseShow('hidden')}>
                    <i className='fas fa-times'></i>
                  </button>
                </div>
              </div>
            </div> */}
            {/* Form */}
            {/* <form className='mt-6 mb-4 md:hidden'>
              <div className='mb-3 pt-0'>
                <input
                  type='text'
                  placeholder='Search'
                  className='border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-white bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal'
                />
              </div>
            </form> */}
            {/* Divider */}
            <hr className='my-4 md:min-w-full mt-12' />
            {/* Navigation */}
            <ul className='md:flex-col md:min-w-full flex flex-col list-none'>
            <li className='items-center'>
                <Link
                  className={
                    'text-xs uppercase py-3 font-bold block  text-white'
                  }
                  to='/admin/dashboard'>
                  <i
                    className={
                      'fa-solid fa-tv mr-2 text-sm ' +
                      (window.location.href.indexOf('/admin/dashboard') !== -1
                        ? 'opacity-75'
                        : 'text-white')
                    }></i>{' '}
                  Dashboard
                </Link>
              </li>
                  
              <li className='items-center hover:cursor-pointer'>
                <div
                  className={
                    'text-xs uppercase py-3 font-bold block  text-white'
                  }
                  onClick={() => postTrigger()}>
                  <i
                    className={
                      'fa-solid fa-clipboard mr-2 text-sm ' +
                      (window.location.href.indexOf('/admin/dashboard') !== -1
                        ? 'opacity-75'
                        : 'text-white')
                    }></i>{' '}
                  Post
                </div>
                <div className={'text-xs uppercase font-bold block text-white pl-6 ' + ddPost}>
                  <ul>
                    <li className='mb-6 mt-2'><Link to='/admin/settings'>Post 1</Link></li>
                    <li className='mb-6'><Link to='/admin/settings'>Post 2</Link></li>
                  </ul>
                </div>
              </li>

              <li className='items-center hover:cursor-pointer'>
                <div
                  className={
                    'text-xs uppercase py-3 font-bold block text-white'
                  }
                  onClick={() => orgTrigger()}>
                  <i
                    className={
                      'fa-solid fa-sitemap mr-2 text-sm ' +
                      (window.location.href.indexOf('/admin/settings') !== -1
                        ? 'opacity-75'
                        : 'text-white')
                    }></i>{' '}
                  Organization
                </div>
                <div className={'text-xs uppercase font-bold block text-white pl-6 ' + ddOrg}>
                  <ul>
                    <li className='mb-6 mt-2'><Link to='/admin/organization/member'>Member</Link></li>
                    <li className='mb-6'><Link to='/admin/settings'>Org 2</Link></li>
                    <li className='mb-6'><Link to='/admin/settings'>Org 3</Link></li>
                    <li className='mb-6'><Link to='/admin/settings'>Org 4</Link></li>
                  </ul>
                </div>
              </li>

              <li className='items-center'>
                <Link
                  className={
                    'text-xs uppercase py-3 font-bold block  text-white'
                  }
                  to='/admin/tables'>
                  <i
                    className={
                      'fa-solid fa-photo-film mr-2 text-sm ' +
                      (window.location.href.indexOf('/admin/tables') !== -1
                        ? 'opacity-75'
                        : 'text-white')
                    }></i>{' '}
                  Media
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
