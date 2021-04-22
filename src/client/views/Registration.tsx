import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

const Registration = () => {
	// browser router hooks
	const history = useHistory();

	// display states from fetching data
	const [data, setData] = useState<{ students: IStudent[]; classes: IClass[] }>({
		students: [],
		classes: []
	});

	// form states
	const [selectedClassId, setSelectedClassId] = useState('0');
	const [selectedStudentId, setSelectedStudentId] = useState('0');

	// error state
	const [error, setError] = useState('');

	useEffect(() => {
		const getData = async () => {
			try {
				const [classesRes, studentsRes] = await Promise.all([
					fetch('/api/classes'),
					fetch('/api/students')
				]);
				const [classes, students] = await Promise.all([
					classesRes.json(),
					studentsRes.json()
				]);
				setData({
					students,
					classes
				});
			} catch (error) {
				console.error('[error]', error.message);
				history.push('/oops');
			}
		};
		getData();
	}, []);

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (selectedStudentId === '0' || selectedClassId === '0') {
			setError('select both things, dispshit');
			return;
		}
		try {
			const res = await fetch('/api/students_classes', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ student_id: Number(selectedStudentId), class_id: Number(selectedClassId) })
			});
			if (res.ok) {
				setError('ty dawg');
			}
		} catch (error) {
			console.error('[error]', error.message);
			history.push('/oops');
		}
	};

	return (
		<main className="container">
			<section className="row justify-content-center">
				<div className="col-12 col-md-8 col-lg-6">
					<form className="form-group border rounded shadow p-4">
						<select
							value={selectedClassId}
							onChange={e => setSelectedClassId(e.target.value)}
							className="form-control">
							<option value="0">Pick a class ...</option>
							{data.classes.map(details => (
								<option key={`class-option-${details.id}`} value={details.id}>
									{details.name}
								</option>
							))}
						</select>
						<select
							value={selectedStudentId}
							onChange={e => setSelectedStudentId(e.target.value)}
							className="form-control">
							<option value="0">Pick a student ...</option>
							{data.students.map(student => (
								<option key={`student-option-${student.id}`} value={student.id}>
									{student.name}
								</option>
							))}
						</select>
						<button onClick={handleSubmit} className="btn btn-primary">
							Register to Class
						</button>
						{error && (
							<small className="text-danger d-block text-center">{error}</small>
						)}
					</form>
				</div>
			</section>
		</main>
	);
};

interface IClass {
	id: number;
	name: string;
	created_at: Date;
}

interface IStudent {
	id: number;
	name: string;
}

export default Registration;
