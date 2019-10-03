
			let turn = 'X';
            let count = 0;
			function play (point) {
				if (document.getElementById(point).innerHTML) return;
				document.getElementById(point).innerHTML = turn;
				let out = checkWin(turn);
                count++;
                
				if (out) return alert(`${turn} has won the game.`);
                if(count==9) return alert(`Game Ended Without Winners`);
				return; 
			}
			function checkWin (side) {
				let points = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'];
				let claimed = points.filter(point => document.getElementById(point).innerHTML == turn);
				for (let i = 1; i < 4; i++) if (claimed.filter(point => point.endsWith(String(i))).length == 3) return true;
				let output;
				['A', 'B', 'C'].forEach(letter => {
					if (claimed.filter(point => point.startsWith(letter)).length == 3) return output = true;
				});
				if (output) return true;
				if ((claimed.includes('A1') && claimed.includes('B2') && claimed.includes('C3')) || (claimed.includes('A3') && claimed.includes('B2') && claimed.includes('C1'))) return true;
				turn = (turn == 'X') ? 'O' : 'X';
				return false;
			}
		
