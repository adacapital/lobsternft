import lobsterResource from './assets/img/lobster.svg';
import lobsterSadHappyResource from './assets/img/LobsterSadAndHappy.gif';
import lobsterHappyResource from './assets/img/LobsterHappy.gif';
import ProgressBar from './ProgressBar';
import React from 'react';
import { NftStatus } from './NftStatus';

function App() {
  return (
    <main className="bg-gray-900 text-white">
        <div className="xl:h-screen bg-gray-900 overflow-hidden relative">{/* Start Hero */}
          <div className="sm:h-96 xl:h-full container mx-auto px-5">
            <div className="absolute top-8">
              {/* <a href="#"><img src={logo} alt="" /></a> */}
            </div>
            <div className="xl:h-full grid gap-y-8 sm:gap-y-0 sm:gap-x-10 sm:grid-cols-2 mt-32 xl:mt-auto content-center">
              <div className="sm:col-span-1 space-y-3 md:space-y-2 xl:space-y-12">
                <h1 className="text-4xl sm:text-4xl xl:text-7xl font-semibold">Every lobster should have a name. Would you agree?</h1>
                <p className="max-w-sm text-lg md:text-2xl">Please help us give a name to Charles' crustacean mascot!</p>
                <div className="space-y-4">
                  {/* <a href="#"><img className="shadow rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg" src="assets/img/apple-store-white-button.svg" alt="" /></a>
                  <a href="#"><img className="shadow rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg" src="assets/img/google-play-white-button.svg" alt="" /></a> */}
                  <NftStatus render={x =>
                    <React.Fragment>
                      <div className="flex justify-start space-x-2">
                        Voting progress:
                      </div>
                      <div className="flex justify-start space-x-2">
                        <div className="w-3/4 py-1">
                          <ProgressBar  percentage={x.progress}/>
                        </div>
                        <span>{x.progressDisplay}</span>
                      </div>
                      {/* {x.estimatedName && <div className="flex justify-start space-x-2">
                          Thank you all for voting, my name is:  {x.estimatedName}
                        
                      </div>} */}
                      {x.estimatedName && <div className="flex justify-start space-x-2">
                      <h1 className="text-2xl md:text-7xl font-semibold text-red-600">{x.estimatedName}</h1>
                      <p className="max-w-sm text-lg md:text-2xl">is my name!</p>
                      </div>}
                    </React.Fragment>
                }>
                </NftStatus>
                </div>
              </div>
              <div className="grid justify-items-center">
                <img className="sm:relative sm:-right-32 md:-right-16 lg:right-0 bottom-0 w-2/3 sm:w-2/4 lg:w-4/5" src={lobsterHappyResource} alt="" />
              </div>
            </div>
          </div>
          {/* <div className="hidden sm:block sm:absolute bottom-6 sm:inset-x-1/2 invisible xl:visible">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div> */}
        </div>{/* End Hero */}

        <section className="container mx-auto px-5 py-12 lg:py-7 ">{/* Start About App */}
          <div className="grid gap-4 md:gap-10 lg:grid-cols-3">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">How to contribute to LobsterNFT</h2>
            </div>
            <div className="lg:col-span-2 text-base md:text-lg">
              <p>
              Charles has a lobster, but the poor creature does not yet have a name. Let's use a simple Plutus Smart Contract on Cardano to help Charles find a name for his lobster!
<br/><br/>
We start with a list of names and a "secret random" number, which we will only reveal in the end. Then we need the Community's help! 
<br/><br/>
We need 500 Community members who are willing to help name the lobster by creating transactions which will add their own "random" number (from 1 to 100) to the current total.
<br/><br/>
In the end, we will reveal their own "secret random" number, add it to the total provided by the Community, and use the result (after taking the remainder after division by the number of available names) as an index into the list of names to pick the lobster name.
              </p>
              <p className="pt-2">
                More info on IOHK's <a className="text-red-600" href="https://github.com/input-output-hk/lobster-challenge" target="_blank" rel="noopener noreferrer">Github</a>.
              </p>
            </div>
          </div>
        </section>{/* End About App */}
        
        <section className="container mx-auto px-5 py-12 lg:py-7 ">{/* Start Credits */}
          <div className="grid gap-4 md:gap-10 lg:grid-cols-3">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold">Credits</h2>
              </div>
              <div className="lg:col-span-2 text-base md:text-lg">
                <p>This fun SPA is brought to you by a new SPO!</p>
                <p>We are an independent Cardano Stake Pool Operator and we are on a mission to run, educate, build and grow the Earth???s most advanced, 3rd generation blockchain platform.</p>
                <br/>
                <p>Our ticker: <h2 className="text-2xl md:text-3xl font-semibold text-red-600">ADACT</h2>
                <br/>
                Our pool ID: <h2 className="text-2xl md:text-3xl font-semibold text-red-600">22ab39540db22349b1934f5dcb7788440c33709ea9fdac07fb343395</h2>
                </p>
                <br/>
                <p>Please support us by delegating your spare ADA :)</p>
                <br/>
                <embed type="text/html" src="https://pool.pm/22ab39540db22349b1934f5dcb7788440c33709ea9fdac07fb343395" width="500" height="900"/>
              </div>
          </div>
        </section>{/* End Credits */}

        <section className="container mx-auto px-5 py-12 lg:py-7 ">{/* Start Contributors */}
          <div className="grid gap-4 md:gap-10 lg:grid-cols-3">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold">Contributors</h2>
              </div>
              <div className="lg:col-span-2 text-base md:text-lg">
                <p>
                dev: <a className="text-red-600" href="https://dpntech.io/" target="_blank" rel="noopener noreferrer">Dmitry</a>
                <br/>
                graphics: <a className="text-red-600" href="https://twitter.com/paulricordeau" target="_blank" rel="noopener noreferrer">Paul</a>
                <br/>
                lead: <a className="text-red-600" href="https://github.com/adacapital" target="_blank" rel="noopener noreferrer">Thomas</a>
               </p>
              </div>
          </div>
        </section>{/* End Contributors */}
        
      </main>
  );
}

export default App;
