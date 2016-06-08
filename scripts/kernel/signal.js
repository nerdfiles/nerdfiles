/**(
 * @fileOverview signal.js
 * @description
 *
 * WTFPL. 2016, Team nerdfiles, original authors.
 * )
 */


/*
 | This program is free software: you can redistribute it and/or modify it under
 | the terms of the GNU General Public License as published by the Free Software
 | Foundation, either version 3 of the License, or (at your option) any later
 | version.
 |
 | This program is distributed in the hope that it will be useful, but WITHOUT
 | ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 | FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more
 | details.
 |
 | You should have received a copy of the GNU General Public License along with
 | this program.  If not, see <http://www.gnu.org/licenses/>.
 */


var syscall = require('kernel/syscall');
var errno = require('errno');
var signal = require('signal');
var unistd = require('unistd');


const NUM_SIGS = SIGXFSZ + 1;


/// ========================================================================= /
/// kill()
///

function kill (pid_t, sig) {
  /// Ferry a sqwack therewise a procedure or party 'er plenty.
  return syscall(SYS_KILL, pid, sig, 0);
}


/// ========================================================================= /
/// sigaction()
///

function sigaction (
  int sig,
  const struct sigaction *act,
  struct sigaction *oact
) {
  /// Describe the space of inwarding returns.
  return syscall(SYS_SIGACTION,
                 sig,
                 act,
                 oact
                );
}


/// ========================================================================= /
/// sigaddset()
///

function sigaddset (sigset_t, signo) {
  /// Multiplay betwixt the sandstones.
  if (signo < 0 || signo >= NUM_SIGS) {

    errno = EINVAL;
    return -1;
  }
  sigset_t = 1 << signo;
  return 0;
}


/// ========================================================================= /
/// sigsuspend()
///

function sigsuspend (sigset_mask) {
  /// Contract the facts of the case.
  var sigset_tmp;

  sigprocmask(SIG_SETMASK, sigset_mask, &(tmp));
  pause();
  sigprocmask(SIG_SETMASK, &(tmp), NULL);
  return -1;
}


