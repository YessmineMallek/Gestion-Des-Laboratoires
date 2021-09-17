package BackGestionLabo.exception;

import java.time.ZoneId;
import java.time.ZonedDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;


@ControllerAdvice
public class GlobalExceptionHandler {
	//handle specific exeption
	@ExceptionHandler(value= {ApiRequestException.class})
	public ResponseEntity<Object> handleApiRequestException(ApiRequestException exception)
	{
			ErrorDetails err= new ErrorDetails(exception.getMessage() , HttpStatus.BAD_REQUEST, ZonedDateTime.now(ZoneId.of("Z")));
			return new ResponseEntity<>(err,HttpStatus.BAD_REQUEST);
	}

}
