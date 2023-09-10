import React, { useState } from 'react';

import './App.css'

import uninstallSG from './assets/uninstall/uninstall_sg.png';
import uninstallTW from './assets/uninstall/uninstall_tw.png';
import uninstallForm from './assets/uninstall/uninstall_form.png';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog"

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogImg, setDialogImg] = useState('');

  const handleImgClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const imgElement = e.target as HTMLImageElement;
    setDialogOpen(true);
    setDialogImg(imgElement.src);
  }

  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    const dialogElement = e.target as HTMLDialogElement;
    const boundingClientRect = dialogElement.getBoundingClientRect();
    if (e.clientX < boundingClientRect.left || e.clientX > boundingClientRect.right ||
      e.clientY < boundingClientRect.top || e.clientY > boundingClientRect.bottom) {
        setDialogOpen(false);
      }
  }

  const handleOpenChange = (open: boolean) => {
    setDialogOpen(open);
  }

  return (
    <>
      <div className="w-full lg:w-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
        <div className="text-left">
          <h2 className="uppercase tracking-wide text-2xl text-indigo-600 font-semibold">Uninstall Feedback</h2>
          <blockquote className="relative p-2 italic border-l-4 border-gray-400 my-4">
            <p className="text-slate-400">Minimal resources to achieve product needs</p>
          </blockquote>
          <p className="text-slate-100">Previously the browser page was only a google form which couldn't record a user info and no chance to reinstall the extension by click if they want to. A Help center link direct to FAQ may solve their problem.</p>
          <p className="mt-4 flex gap-2 [&>a]:text-blue-500"><span className="uppercase">Links:</span>
            <a href="https://www.shopback.sg/uninstall">SG</a> /
            <a href="https://www.shopback.com.tw/uninstall">TW</a> /
            <a href="https://www.shopback.co.kr/uninstall">KR</a> / 
            <a href="https://www.shopback.co.id/uninstall">ID</a> / 
            <a href="https://www.shopback.co.th/uninstall">TH</a> /
            <a href="https://www.shopback.my/uninstall">MY</a> / 
            <a href="https://www.shopback.ph/uninstall">PH</a> / 
            <a href="https://www.shopback.com.hk/uninstall">HK</a> /
            <a href="https://www.shopback.com.au/uninstall">AU</a>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1 grid gap-4">
            <img className="h-auto max-h-full rounded-md" src={uninstallSG} alt="" onClick={handleImgClick} />
            <img className="h-auto max-h-full rounded-md" src={uninstallTW} alt="" onClick={handleImgClick} />
          </div>
          <div className="col-span-1">
            <img className="w-auto h-full object-cover rounded-md" src={uninstallForm} alt="" onClick={handleImgClick} />
          </div>
        </div>
      </div>
      {/* <dialog className="max-w-[85%]" open={dialogOpen} onClick={handleDialogClick}>
        <img src={dialogImg} />
      </dialog> */}
      <Dialog defaultOpen={dialogOpen} open={dialogOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="lg:max-w-screen-lg overflow-y-scroll max-w-screen">
          <DialogHeader></DialogHeader>
          <img className="h-full w-full" src={dialogImg} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default App
